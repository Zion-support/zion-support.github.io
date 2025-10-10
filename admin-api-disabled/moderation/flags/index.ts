const filtered = flags.filter(f => (!status || f.status === status) && (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) && (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) && (!contentType || f.contentType === contentType) ); return res.status(200).json({ flags: filtered }); } } if (req.method === 'POST') { const init = req.body || {}; try {const flag = await createFlag(init)} return res.status(201).json({ flag }); } catch (e: unknown) { ',
const filtered = flags.filter(f => (!status || f.status === status) && (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) && (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) && (!contentType || f.contentType === contentType) ); return res.status(200).json({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  s: filtered }); } } if (req.method === 'POST') { const init = req.body || {}; try {const flag = await createFlag(init)} return res.status(201).json({ flag }); } catch (e: unknown) {/* TODO: Fix JSX expression */}
=======
  s: filtered })} } if (req.method === 'POST') { const init = req.body || {}; try {const flag = await createFlag(init)} return res.status(201).json({ flag })} catch (e: unknown) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
