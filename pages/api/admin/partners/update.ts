

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
    return res.status (500).json ({ error: e?.message });
  }

}

=======
}
;
=======


  }
}


