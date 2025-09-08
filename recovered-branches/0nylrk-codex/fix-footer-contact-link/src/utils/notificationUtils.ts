

import {supabase} from "@/integrations/supabase/client";


import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',

  userId,
  title,
  message,
  type,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  relatedId = null,
  sendEmail = false,
  actionUrl = null,

  actionText = null
}: {
  actionText = null
}: {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null  actionText?: string | null
}) {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function

    const { data, error } = await supabase.rpc('create_notification', {
  actionText?: string | null
}) {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
    
import { supabase } from "@/integrations/supabase/client",;

type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
/**;
 * Creates a notification for a user and optionally sends an email notification;
 */;
export async function createNotification() { return null; }
    const { data, error } = await supabase.rpc('create_notification', {;
      _user_id: userId,;
      _title: title,;
      _message: message,;
      _type: type,;
      _related_id: relatedId;
    }),;
    if (error) throw error,;
    // If sendEmail is true, call the edge function to send an email;
    if (sendEmail && data) {;
      const notificationId = data,;'
      await supabase.functions.invoke('send-notification-email', {;

        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
    return { success: false, error }
  }
}      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,

success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,
<<<<<<< HEAD

      adminNotification
  } catch (error) {;
    console.error('Error creating notification:', error),;
  } catch (error) {;
    console.error('Error creating notification:', error),;

    return { success: false, error }
  }
}

/**

<<<<<<< HEAD
 * Creates a hire request notification for admin and talent
 */  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }

    'system': { url: '/dashboard', text: 'Learn More' }
  }

;

;
  return create_notification ({}
    user_id;
    title: titles[random_type];
    message: messages[random_type];
    type: random_type;
    send_email: true;
    action_url: actions[random_type].url,
    action_text: actions[random_type].text;
  });}
;
/**;
 * Creates a system notification for a user;
 */;

<<<<<<< HEAD
export async function createSystemNotification({;
  userId,;
  title,;
  message,;
  actionUrl = null,;
  actionText = null,;
  sendEmail = false;
}: {;
  userId: string,;
  title: string,;
  message: string,;
  actionUrl?: string | null,;
  actionText?: string | null,;
  sendEmail?: boolean;
  userId:string,;
  title:string,;
  message:string,;
  actionUrl?:string | null,;
  actionText?:string | null,;
  sendEmail?:boolean;
    sendEmail,;
    actionUrl,;
    actionText;
  }),;
}
;
export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  ;
  const titles = {;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
  },;
  ;
  const messages = {;
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
  },;
  ;
  const actions = {;

    'message':{ url:'/messages', text:'View Messages' },;
    'quote_request':{ url:'/quotes', text:'View Quote' },;
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;
    'hire_request':{ url:'/dashboard', text:'View Request' },;
    'onboarding':{ url:'/profile', text:'Complete Profile' },;
    'system':{ url:'/dashboard', text:'Learn More' }

  },;
  ;
  return createNotification({;
    userId,;

pr-12325
    title:titles[randomType],;
    message:messages[randomType],;
    type:randomType,;
    sendEmail:true,;


    actionUrl:actions[randomType].url,;
    actionText:actions[randomType].text;
  }),;
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
//If sendEmail is true, call the edge function to send an email 
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType 
}project` : "";
  userId: talentId, title: `New Hire Request from $ {
  requesterName 
}`;
message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire you for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/dashboard';
actionText: 'View Request' 

});
//Create notification for admin if admin ID is provided if (adminId) {
  const adminNotification = await createNotification ({
  userId: adminId, title: `New Hire Request for Talent`, message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire talent for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/admin/hire-requests';
actionText: 'Review Request' 
});
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {
  switch (missingMilestone) {
  case 'profile completed': title = 'Complete your profile';
message = 'Complete your profile to get discovered by clients';
actionUrl = '/profile';
actionText = 'Complete Profile';
break;
case 'skills added': title = 'Add your skills';
message = 'Add your skills to get better job matches';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
break;
case 'availability set': case 'job posted': title = 'Post your first job';
message = 'Post your first job to start finding talent';
actionUrl = '/post-job';
actionText = 'Post Job';
break;

case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
break;
case 'talent invited': 

}/** * Creates a system notification for a user */ 
}/** * Demo function to create test notifications for the current user */ 
}
}
;
}
;
}
;

}
