



/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({

import { createNotification  } from './createNotification';
import { OnboardingNotificationParams } from './types';
import {createNotification} from './createNotification';
import {OnboardingNotificationParams} from './types';
/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({;
  userId;
  missingMilestone;
export async function createOnboardingNotification({  missingMilestone;
  userRole
}: OnboardingNotificationParams) {


}

  return createNotification({;
    title,;
    message,;
    type: 'onboarding',;
    sendEmail: false;
    actionUrl;
    actionText;
  });

}
;
}
;
    actionText;)


    type:'onboarding',;
    sendEmail:false,;
    actionUrl,;
    actionText;
  }),;
} if (userRole === 'talent') {
  case 'profile completed': title = 'Complete your profile';
actionUrl = '/profile';
actionText = 'Complete Profile';
case 'skills added': title = 'Add your skills';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
case 'availability set': case 'job posted': title = 'Post your first job';
actionUrl = '/post-job';
actionText = 'Post Job';
case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
case 'talent invited':
pr-12325
  }),;'
} if (userRole === 'talent') {'
  switch (missingMilestone) {'
  case 'profile completed': title = 'Complete your profile';''
message = 'Complete your profile to get discovered by clients';''
actionUrl = '/profile';''
actionText = 'Complete Profile';'
break;'
case 'skills added': title = 'Add your skills';''
message = 'Add your skills to get better job matches';''
actionUrl = '/profile/skills';''
actionText = 'Add Skills';'
break;'
case 'availability set': case 'job posted': title = 'Post your first job';''
message = 'Post your first job to start finding talent';''
actionUrl = '/post-job';''
actionText = 'Post Job';'
break;'
case 'match viewed': title = 'View your AI matches';''
message = 'Check out your AI-matched talent suggestions';''
actionUrl = '/client-dashboard';''
actionText = 'View Matches';'
break;'
case 'talent invited':'
}
}
;
}
;
}
'

