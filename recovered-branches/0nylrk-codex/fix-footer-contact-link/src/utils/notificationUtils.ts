 type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 /** * Creates a notification for a user and optionally sends an email notification */ if (error) throw error;
//If sendEmail is true, call the edge function to send an email 
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType 
}project` : "";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Create notification for talent const talentNotification = await createNotification ({
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