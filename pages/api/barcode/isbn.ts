



  }
  try {
    const png = await bwipjs.toBuffer({

      bcid: 'ean13'
      text: code.replace(/[^0-9]/g, '')
      scale: 3
      height: 10
includetext: false})
    res.setHeader('Content-Typeimage/png')




