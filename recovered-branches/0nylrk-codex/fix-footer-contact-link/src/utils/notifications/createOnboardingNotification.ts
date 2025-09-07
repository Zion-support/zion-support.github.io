
import { createNotification } from './createNotification';
import { OnboardingNotificationParams } from './types';
/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({
  userId,
  missingMilestone,
  userRole
}: OnboardingNotificationParams) {
  let title = $2;
  let message = $2;
  let actionUrl = $2;
  let actionText = $2;
  if (userRole = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'skills_added':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'availability_set':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break
    }
  } else {
    switch (missingMilestone) {
      case 'job_posted':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'match_viewed':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'talent_invited':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break
    }
  }
  
  return createNotification({
    userId,
    title,
    message,
    type: 'onboarding',
    sendEmail: false,
    actionUrl,
    actionText
  })
}
