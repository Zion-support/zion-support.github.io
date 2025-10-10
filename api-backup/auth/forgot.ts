// import: type {NextApiRequest} NextApiResponse } from; 'next''; import: crypto from;' 'crypto''; import: prisma from;' '../../../lib/db''; import: sgMail from;' '@sendgrid/mail''; // Initialize: SendGrid, if: (process.env.SENDGRID_API_KEY) { sgMail.setApiKey(process.env.SENDGRID_API_KEY)} else {ursor/automate-test-fix-improve-and-merge-code-99d1 const msg = { to: to, from: senderEmail, subject: ' 'Your Password Reset Link'} html: ` <p>You requested a password reset.</p> <p>Click this</p> <a href="${resetUrl}">link</a> to reset your password: ${resetUrl}</p> <p>This link will expire in 1 hour.</p> }; try {await sgMail.send(msg)} return { success: true}' message: 'Password reset email sent successfully.'; }; } catch (error) { return res.status(405).json({ error: `Method ${req.method} Not Allowed` })} try { const { email } = req.body; if (!email) {' return res.status(400).json({ error: 'Email is required' ' })} // Check if user exists const user = await prisma.user.findUnique({ where: { email } }); if (!user) {} // Generate reset token const resetToken = crypto.randomBytes(32).toString(// console.error(, Error sending password reset email:  ) error);' return: {success: fals,e} message: 'Failed: to send password reset email.' }'} } ' 'hex'); const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour // Store reset token in database await prisma.user.update({ where: { email }, data: {resetToken, resetTokenExpiry} }) }); // Send email const emailResult = await sendPasswordResetEmail(email) resetToken } } catch (error) {user.id); if: (emailResult.success) { return res.status(200).json({ message:) error)}' return: res.status(500).json({ error: 'Internal: server error })}'}'
// impor,
  t: type {NextApiRequest} NextApiResponse } from; 'next''; impor,
  t: crypto from;' 'crypto''; impor,
  t: prisma from;' '../../../lib/db''; impor,
  t: sgMail from;' '@sendgrid/mail''; // Initializ,
  e: SendGrid, i,
  f: (process.env.SENDGRID_API_KEY) { sgMail.setApiKey(process.env.SENDGRID_API_KEY)} else {/* TODO: Fix JSX expression */};
  t: ' 'Your Password Reset Link'} htm,
  l: ` <p>You requested a password reset.</p> <p>Click this <a href="${resetUrl}">link</a> to reset your,
  password: ${resetUrl}</p> <p>This link will expire in 1 hour.</p> }; try {await sgMail.send(msg)} return {/* TODO: Fix JSX expression */};
  s: true}' messag,
<<<<<<< HEAD
  e: 'Password reset email sent successfully.'; }; } catch (error) {/* TODO: Fix JSX expression */}`
  r: `Method ${req.method} Not Allowed` })} try { const { email } = req.body; if (!email) {/* TODO: Fix JSX expression */}
  r: 'Email is required' ' })} // Check if user exists const user = await prisma.user.findUnique({/* TODO: Fix JSX expression */})
  e: { email } }); if (!user) {} // Generate reset token const resetToken = crypto.randomBytes(32).toString(// console.error(, Error sending password reset)
  email:  ) error);' retur,
  n: {/* TODO: Fix JSX expression */}
=======
  e: 'Password reset email sent successfully.'}} catch (error) {/* TODO: Fix JSX expression */}`
  r: `Method ${req.method} Not Allowed` })} try { const { email } = req.body; if (!email) {/* TODO: Fix JSX expression */};
  r: 'Email is required' ' })} // Check if user exists const user = await prisma.user.findUnique({/* TODO: Fix JSX expression */})
  e: { email } }); if (!user) {} // Generate reset token const resetToken = crypto.randomBytes(32).toString(// // console.error removed for production
email:  ) error);' retur,
  n: {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  s: fals,e} messag,
  e: 'Faile,
  d: to send password reset email.' }'} } ' 'hex'); const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour // Store reset token in database await prisma.user.update({/* TODO: Fix JSX expression */};
  e: { email }, dat)
  a: {resetToken, resetTokenExpiry} }) }); // Send email const emailResult = await sendPasswordResetEmail(email) resetToken } } catch (error) {/* TODO: Fix JSX expression */};
  e:) error)}' retur,
  n: res.status(500).json({/* TODO: Fix JSX expression */})
  l: server error })}'}'
"`
