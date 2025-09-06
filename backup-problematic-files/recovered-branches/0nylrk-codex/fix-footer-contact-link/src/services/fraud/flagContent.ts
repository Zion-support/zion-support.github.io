
  }
},; //Content flagging functionality /** * Flag content for review */export const flagContent = async (userId: string;
userEmail: string | undefined;
contentType: FraudFlag['content type'];
contentId: string;
contentExcerpt: string;
severity: FraudSeverity;
reason: string;
ipAddress?: string userId;
contentType;
contentId;
reason;
severity
});
const {
  error
}= await supabase.from ('fraud flags') .insert ({
  user id: userId;
user email: userEmail;
content type: contentType;
content id: contentId;
content excerpt: contentExcerpt.substring (0, 200), // Limit excerpt length severity;
reason;
ip address: ipAddress;
timestamp: new Date () .toISOString ();
status: 'pending'
});
}

