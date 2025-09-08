import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any),
    res.status(200).json({ ok: true})
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }

}


}


<<<<<<< HEAD



=======
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
