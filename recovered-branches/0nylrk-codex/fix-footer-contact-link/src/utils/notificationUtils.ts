

type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification(_{_userId, _title, _message, _type, _relatedId = null, _sendEmail = false, _actionUrl = null, _actionText = null}: {_userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;}) {_void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, _error} = await supabase.rpc(_'create_notification', _{_user_id: userId, _title: title, _message: message, _type: type, _related_id: relatedId});
    
    if (error) throw error;
    
    // If sendEmail is true, call the edge function to send an email
    if (_sendEmail && data) {_const _notificationId = data;
      await supabase.functions.invoke('send-notification-email', _{
        body: { user_id: userId, _notification_id: notificationId}
      });
    }
    
    return {_success: true, _notificationId: data};
  } catch (error) {_return { success: false, _error};
  }
}

/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications(_{_talentId, _adminId, _requesterName, _requesterEmail, _projectType, _projectSummary, _hireRequestId}: {_talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;}) {_const _projectInfo = projectType 
    ? `${projectType} project` 
    : "project";
  
  const _summaryText = projectSummary 
    ? `: "${_projectSummary}"` 
    : "";
  
  // Create notification for talent
  const _talentNotification = await createNotification({_userId: talentId, _title: `New Hire Request from ${requesterName}`,
    message: `${_requesterName} (${_requesterEmail}) wants to hire you for a ${_projectInfo}${_summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request'
  });
  
  // Create notification for admin if admin ID is provided
  if (adminId) {_const _adminNotification = await createNotification({
      userId: adminId, _title: `New Hire Request for Talent`, _message: `${requesterName} (${_requesterEmail}) wants to hire talent for a ${_projectInfo}${_summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request'
    });
    
    return {_success: talentNotification.success && adminNotification.success, _talentNotification, _adminNotification};
  }
  
  return {_success: talentNotification.success, _talentNotification};
}

/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification(_{_userId, _missingMilestone, _userRole}: {_userId: string;
  missingMilestone: string;
  userRole: 'talent' | 'client';}) {_let _title = '';
  let _message = '';
  let _actionUrl = '';
  let _actionText = '';
  
  if (userRole === 'talent') {
    switch (missingMilestone) {
      case 'profile_completed':
        title = 'Complete your profile';
        message = 'Complete your profile to get discovered by clients';
        actionUrl = '/profile';
        actionText = 'Complete Profile';
        break;
      case 'skills_added':
        title = 'Add your skills';
        message = 'Add your skills to get better job matches';
        actionUrl = '/profile/skills';
        actionText = 'Add Skills';
        break;
      case 'availability_set':
        title = 'Set your availability';
        message = 'Set your availability to help clients know when you can work';
        actionUrl = '/profile/settings';
        actionText = 'Set Availability';
        break;}
  } else {_switch (missingMilestone) {
      case 'job_posted':
        title = 'Post your first job';
        message = 'Post your first job to start finding talent';
        actionUrl = '/post-job';
        actionText = 'Post Job';
        break;
      case 'match_viewed':
        title = 'View your AI matches';
        message = 'Check out your AI-matched talent suggestions';
        actionUrl = '/client-dashboard';
        actionText = 'View Matches';
        break;
      case 'talent_invited':
        title = 'Invite talent';
        message = 'Invite talent to speed up your hiring process';
        actionUrl = '/talent';
        actionText = 'Find Talent';
        break;}
  }
  
  return createNotification({_userId, _title, _message, _type: 'onboarding', _sendEmail: false, _actionUrl, _actionText});
}

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification(_{_userId, _title, _message, _actionUrl = null, _actionText = null, _sendEmail = false}: {_userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;}) {_return createNotification({
    userId, _title, _message, _type: 'system', _sendEmail, _actionUrl, _actionText});
}

/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(_userId: string) {_const types: NotificationType[] = ['message', _'quote_request', _'booking_confirmation', _'hire_request', _'onboarding', _'system'];
  const _randomType = types[Math.floor(Math.random() * types.length)];
  
  const _titles = {
    'message': 'New Message Received', _'quote_request': 'Quote Request Submitted', _'booking_confirmation': 'Booking Confirmed', _'hire_request': 'New Hire Request', _'onboarding': 'Complete Your Profile', _'system': 'System Update'};
  
  const _messages = {_'message': 'You have received a new message from a potential client.', _'quote_request': 'A client has submitted a quote request for your services.', _'booking_confirmation': 'Your booking has been confirmed and scheduled.', _'hire_request': 'A client wants to hire you for a project. Check your dashboard for details.', _'onboarding': 'Complete your profile to get more visibility and job matches.', _'system': 'Our platform has been updated with new features. Check them out!'};
  
  const _actions = {_'message': { url: '/messages', _text: 'View Messages'},
    'quote_request': {_url: '/quotes', _text: 'View Quote'},
    'booking_confirmation': {_url: '/bookings', _text: 'View Booking'},
    'hire_request': {_url: '/dashboard', _text: 'View Request'},
    'onboarding': {_url: '/profile', _text: 'Complete Profile'},
    'system': {_url: '/dashboard', _text: 'Learn More'}
  };
  
  return createNotification({_userId, _title: titles[randomType], _message: messages[randomType], _type: randomType, _sendEmail: true, _actionUrl: actions[randomType].url, _actionText: actions[randomType].text});
}
