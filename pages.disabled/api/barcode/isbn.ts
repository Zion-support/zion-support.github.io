
  }

  try {
    const png = await bwipjs.toBuffer({

    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }


