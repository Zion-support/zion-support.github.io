 /** * Creates a hire request notification for admin and talent */ export async function createHireRequestNotifications ({
  talentId, adminId, requesterName, requesterEmail, projectType, projectSummary, hireRequestId 
}: HireRequestNotificationParams) {
  const projectInfo = projectType ? `$ {
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
}