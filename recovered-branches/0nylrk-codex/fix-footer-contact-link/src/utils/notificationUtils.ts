

import {supabase} from "@/integrations/supabase/client";


import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',





/**
 * Creates a notification for a user and optionally sends an email notification
 */



export async function createNotification({


  userId,
  title,
  message,
  type,

  relatedId = null,
  sendEmail = false,
  actionUrl = null,

  title: string,
  message: string,
  type: NotificationType,
  relatedId?: string | null,
  sendEmail?: boolean,
  actionUrl?: string | null,


      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,

    

    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {



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



      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;

      talentNotification,

success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,

      adminNotification




    return { success: false, error }
  }
}

/**

 * Creates a hire request notification for admin and talent
 */

export async function createHireRequestNotifications({

    }
  }

  return {
    success: talentNotification && talentNotification.success,
    talentNotification
  }
}





/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({

    type: 'onboarding';
    send_email: false;
    action_url,
    action_text;
  });
}
/**;
* Creates a system notification for a user;
*/;

    type: 'system';
    send_email;
    action_url,
    action_text;
  });
}
/**;
* Demo function to create test notifications for the current user;
*/;

export async /**
 * createTestNotification - Function description

  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {



  const random_type = types[Math.floor (Math.random () * types.length)],
  const titles = {'
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  }
;
  const messages = {'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  }
;



  const actions = {

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

  });

}

;
/**;
 * Creates a system notification for a user;
 */;

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
} {;
  userId:string,;
  title:string,;
  message:string,;
  actionUrl?:string | null,;
  actionText?:string | null,;
  sendEmail?:boolean;
}) {;
  return createNotification({;
    userId,;
    title,;
    message,;
    type: 'system',;

    sendEmail,;
    actionUrl,;
    actionText;
  }),;

}

;
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification() { return null; }
  },;
  const messages = {;'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  },;
  const actions = {;'
    'message': { url: '/messages', text: 'View Messages' },;'
    'quote_request': { url: '/quotes', text: 'View Quote' },;'
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;'
    'hire_request': { url: '/dashboard', text: 'View Request' },;'
    'onboarding': { url: '/profile', text: 'Complete Profile' },;'
    'system': { url: '/dashboard', text: 'Learn More' }
  },;
  return createNotification({;
    userId,;
    title: titles[randomType],;
    message: messages[randomType],;
    type: randomType,;
    sendEmail: true;
    actionUrl: actions[randomType].url;
    actionText: actions[randomType].text;
  });




