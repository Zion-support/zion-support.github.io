// const completion = await client.chat.completions.create({/* TODO: Fix JSX expression */};
  e: ch.title} conten)
  t: text }) } res.status(200).json({/* TODO: Fix JSX expression */})
  s: drafted }) } ' import type {NextApiRequest} NextApiResponse } from 'next',' import OpenAI from 'openai', export default async /** * handler - Function description */ function handler() { // Check condition if ( {) { $2 }' res.status (405).json ({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  r: 'Method not allowed' }); return; } const {meta} chapters } = req.body as {/* TODO: Fix JSX expression */}
=======
  r: 'Method not allowed' }); return} const {meta} chapters } = req.body as {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  e: string} content?: string }[] }, const api_key = process.env.OPENAI_API_KEY, // Check condition if ( {) { $2 } } // Fallbac,
  k: return structured placeholders, const drafted = chapters.map ((c) => ({/* TODO: Fix JSX expression */};
  e: c.title}' conten)
  t: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\\n\\n- Key idea 1\\n- Key idea 2\\n- Key idea 3`})), res.status (200).json ({/* TODO: Fix JSX expression */})`
<<<<<<< HEAD
  s: drafted }); return; } const client = new OpenAI ({ api_key }), const system = `You are a book - writing assistant. Write concise but high - signal chapters for a visionary, systems - architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`, const drafted = [] as {/* TODO: Fix JSX expression */}
=======
  s: drafted }); return} const client = new OpenAI ({ api_key }), const system = `You are a book - writing assistant. Write concise but high - signal chapters for a visionary, systems - architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`, const drafted = [] as {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  e: string} conten,
  t: string }[], for (const ch of chapters) {/* TODO: Fix JSX expression */};
  k: ${meta.title} — ${meta.subtitle || ''}\\n_autho,
  r: ${meta.author}\\n_chapte,`
  r: ${ch.title}\\n\\n_write 600 - 900 words. Include 1 short quote block if appropriate.`, const completion = await client.chat.completions.create ({/* TODO: Fix JSX expression */};
  e: 'system'} conten,
  t: system },' {/* TODO: Fix JSX expression */};
  e: 'user'} conten)
  t: prompt }]) temperatur,
  e: 0.7}),' const text = completion.choices?.[0]?.message?.content || '', drafted.push ({/* TODO: Fix JSX expression */};
  e: ch.title} conten)
<<<<<<< HEAD
  t: text }); } res.status (200).json ({/* TODO: Fix JSX expression */})
  s: drafted }); } ; res.status(200).json({/* TODO: Fix JSX expression */})
  s: drafted }); } catch (error) {/* TODO: Fix JSX expression */}
  r: "Internal server error" }); } '
=======
  t: text })} res.status (200).json ({/* TODO: Fix JSX expression */})
  s: drafted })} ; res.status(200).json({/* TODO: Fix JSX expression */})
  s: drafted })} catch (error) {/* TODO: Fix JSX expression */};
  r: "Internal server error" })} '
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
"`