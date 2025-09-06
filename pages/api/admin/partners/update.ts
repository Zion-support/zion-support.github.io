

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });
<<<<<<< HEAD
<<<<<<< HEAD

=======
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message })
  };
=======
    return res.status(500).json({ error: e?.message });
  }
>>>>>>> main
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const supabase = getServerSupabase (),
    const updates: any = {},
    // Check condition
if (updates.status = status, ) {
  $2
}
    // Check condition
if (updates.commission_rate = commission_rate, ) {
  $2
}
    const { error } = await supabase.from ('partners').update (updates).eq ('code', String (code).toLowerCase ()),
    if (return res.status (500).json ({ error: error.message })) {
  $2
}
    return res.status (200).json ({ ok: true });
<<<<<<< HEAD
<<<<<<< HEAD

  } catch (e: any) {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return res.status (500).json ({ error: e?.message });
  }

}

<<<<<<< HEAD
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


=======
}
;


  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
=======

  } catch (e: any) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status (500).json ({ error: e?.message });
  }

  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true });
    }
}
;



      const updates: any = {};
      if (status) updates.status = status;
      if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

<<<<<<< HEAD
      // Mock update - replace with real database update
      res.json({ success: true, updated: updates });
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
