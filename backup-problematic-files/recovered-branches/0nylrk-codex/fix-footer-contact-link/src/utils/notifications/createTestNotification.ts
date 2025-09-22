
import { NotificationType } from './types';
import { createNotification } from './createNotification';
;
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  ;
  const titles = {;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
  };
  ;
  const messages = {;
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
  };
  ;
  const actions = {;
    'message':{ url:'/messages', text:'View Messages' };
    'quote_request':{ url:'/quotes', text:'View Quote' };
    'booking_confirmation':{ url:'/bookings', text:'View Booking' };
    'hire_request':{ url:'/dashboard', text:'View Request' };
    'onboarding':{ url:'/profile', text:'Complete Profile' };
    'system':{ url:'/dashboard', text:'Learn More' }
  };
  ;
  return createNotification({;
    userId;
    title:titles[randomType];
    message:messages[randomType];
    type:randomType;
    sendEmail:true;
    actionUrl:actions[randomType].url;
    actionText:actions[randomType].text;
  });
} 
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
