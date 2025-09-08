
  }
  const reasons: string[] = [];  }




      const { data: recentSignups, error } = await supabase;
        .from('profiles');
        .select('created_at');
        .eq('ip_address', ipAddress);
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;
        .order('created_at', { ascending: false }),;
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);



      }

  return {

    isSuspicious: reasons && reasons.length > 0,
    reasons
  }
}


}
    reasons.push (...email_check.reasons);
  }
  // If IP address is provided, check for rapid signups from same IP;

    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;


};




