
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {createNotification} from './createNotification';
import {HireRequestNotificationParams} from './types';
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({;
  talentId;
  adminId;
  requesterName;
=======
import { createNotification } from './createNotification',
import { HireRequestNotificationParams } from './types',
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({
  talentId;
  adminId;
  requesterName;

  requesterEmail,
  talentId,
  adminId,
  requesterName,
  requesterEmail, 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  projectType,
  projectSummary,
  hireRequestId
}: HireRequestNotificationParams) {
  const projectInfo = projectType
    ? `${projectType} project`
    : "project",

  const summaryText = projectSummary
    ? `: "${projectSummary}"`
    : "",

  // Create notification for talent
  const talentNotification = await createNotification({
    userId: talentId,
    title: `New Hire Request from ${requesterName}`,
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request'
  }),

  // Create notification for admin if admin ID is provided
  if (adminId) {
    const adminNotification = await createNotification({
      userId: adminId,
      title: `New Hire Request for Talent`,
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request'
    }),

    return {
      success: talentNotification.success && adminNotification.success,
      talentNotification,
      adminNotification
import { createNotification } from './createNotification',;
import { HireRequestNotificationParams } from './types',;
/**;
 * Creates a hire request notification for admin and talent;
 */;
export async function createHireRequestNotifications({;
  talentId,;
  adminId,;
  requesterName,;
  requesterEmail,;
  projectType,;
  projectSummary,;
  hireRequestId;
}: HireRequestNotificationParams) {;
  const projectInfo = projectType;
    ? `${projectType} project`;
    : "project",;
  const summaryText = projectSummary;
    ? `: "${projectSummary}"`;
    : "",;
  // Create notification for talent;
  const talentNotification = await createNotification({;
    userId: talentId,;
    title: `New Hire Request from ${requesterName}`,;
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,;
    type: 'hire_request',;
    relatedId: hireRequestId,;
    sendEmail: true,;
    actionUrl: '/dashboard',;
    actionText: 'View Request';
  }),;
  // Create notification for admin if admin ID is provided;
  if (adminId) {;
    const adminNotification = await createNotification({;
      userId: adminId,;
      title: `New Hire Request for Talent`,;
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,;
      type: 'hire_request',;
      relatedId: hireRequestId,;
      sendEmail: true,;
      actionUrl: '/admin/hire-requests',;
      actionText: 'Review Request';
    }),;
    return {;
      success: talentNotification.success && adminNotification.success,;
      talentNotification;
      adminNotification;
    }
  }
  return {

    success: talentNotification && talentNotification.success,

    talentNotification
/**;
 * Creates a hire request notification for admin and talent;
 */;
export async function createHireRequestNotifications({;
  talentId,;
  adminId,;
  requesterName,;
  requesterEmail,;
  projectType,;
  projectSummary,;
  hireRequestId;
}: HireRequestNotificationParams) {;
  const projectInfo = projectType;
    ? `${projectType} project`;
    : "project",;
  const summaryText = projectSummary;
    ? `: "${projectSummary}"`;
    : "",;
  // Create notification for talent;
  const talentNotification = await createNotification({;
    userId: talentId,;
    title: `New Hire Request from ${requesterName}`,;
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,;
    type: 'hire_request',;
    relatedId: hireRequestId,;
    sendEmail: true,;
    actionUrl: '/dashboard',;
    actionText: 'View Request';
  }),;
  // Create notification for admin if admin ID is provided;
  if (adminId) {;
    const adminNotification = await createNotification({;
      userId: adminId,;
      title: `New Hire Request for Talent`,;
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,;
      type: 'hire_request',;
      relatedId: hireRequestId,;
      sendEmail: true,;
      actionUrl: '/admin/hire-requests',;
      actionText: 'Review Request';
    }),;
    return {;
      success: talentNotification.success && adminNotification.success,;
      talentNotification;
      adminNotification;
  }
}