

  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ saved: false, mock: true });
    }
    const supabase = getServerSupabase ();
    const { error } = await supabase.from ("referral_events").insert ({
      partner_code: String (code).toLowerCase (),
      event: String (event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req.headers["user - agent"] || null,
      ip_address:;
        (req.headers["x - forwarded - for"] as string) ||;
        req.socket.remote_address ||;
        null,
    });
    if (return res.status (500).json ({ error: "Database error" })) {
  $2
}
    return res.status (200).json ({ saved: true });
  } catch (e: any) {

    return res.status (200).json ({ saved: false, error: e?.message });


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({;
      partner_code: String(code).toLowerCase();
      event: String(event);
      url: url || null;
      referrer: referrer || null;
      user_agent: req.headers['user-agent'] || null,;
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    return res.status(200).json({ saved: false, error: e?.message });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
