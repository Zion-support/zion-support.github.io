<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });

=======
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

  } catch (e: any) {
<<<<<<< HEAD
=======
    return res.status (500).json ({ error: e?.message });
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


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

  }
}

=======
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
