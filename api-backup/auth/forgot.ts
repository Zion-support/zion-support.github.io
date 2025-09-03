<<<<<<< HEAD
import: type { NextApiRequest, NextApiResponse } from;
  'next';
import: crypto from;
  'crypto';
import: prisma from;
  '../../../lib/db';
import: sgMail from;
  '@sendgrid/mail';
// Initialize: SendGrid;
if: (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)} else {
  console.warn(
  'SENDGRID_API_KEY is not set. Email sending will be disabled.')}';
// Actual: email sending function using SendGrid;
const: sendPasswordResetEmail = async(
  to: strin,g,
  token: strin,g,
  userId: string) => {
  if: (!process.env.SENDGRID_API_KEY) {
    console.error(
  'SendGrid API Key not configured. Cannot send email.');
    // In: a real ap,p, you might want to throw an error or handle this more gracefully;
    // For: now, returning success: false: to indicate failure to send.;
    return: { success: fals,e, message: 'Email: service not configured.'}';
  }
  const: resetUrl = `${process.env.NEXT_PUBLIC_APP_URL ||,
  http: //localhost:300,0}/reset-password/${userId}/${token}`;
  const: senderEmail = process.env.SENDGRID_SENDER_EMAIL ||;
  'no-reply@example.com';
  const: msg = {
    to: t,o,
    from: senderEmai,l,
    subject: ;
  'Your: Password Reset Link,',';
    html: `;
      <p>You: requested a password reset.</p>
      <p>Click this <a href='${resetUr,l}'>link</a> to reset your password: ${resetUr,l}</p>';
      <p>This: link will expire in 1 hour.</p>
      <p>If you didn;
  't: request this, please ignore this email.</p>';
    `  }
;
  try: {
    await sgMail.send(msg);
    return: {
      success: tru,e,
      message: 'Password: reset email sent successfully.,'}';
  } catch: (error) {
  console.warn('
  'SENDGRID_API_KEY is not set. Email sending will be disabled.')}
// Actual email sending function using SendGrid;
const sendPasswordResetEmail = async(
  to: string,
  token: string,
  userId: string) => {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('
  'SendGrid API Key not configured. Cannot send email.');
    // In a real app, you might want to throw an error or handle this more gracefully;
    // For now, returning success: false to indicate failure to send.;
    return { succes,
    s: false, message: 'Email service not configured.' }
  }

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password/${userId}/${token}`;
  const senderEmail =
    process.env.SENDGRID_SENDER_EMAIL || 'no-reply@example.com';

ursor/automate-test-fix-improve-and-merge-code-99d1

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL ||,`
  http: //localhos,
    t:3000}/reset-password/${userId}/${token}`;
  const senderEmail = process.env.SENDGRID_SENDER_EMAIL ||;`
  'no-reply@example.com';
  const msg = {
    to: to,
    from: senderEmail,
    subject:;
  'Your Password Reset Link',
    html: `;
      <p>You requested a password reset.</p>`
      <p>Click this <a href='${resetUrl}>link</a> to reset your password: ${resetUrl}</p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
ursor/automate-test-fix-improve-and-merge-code-99d1;
};

      <p>If you didn;
  't request this, please ignore this email.</p>'
    `  }
  try {
    await sgMail.send(msg);
    return {
      success: true,`
      message: 'Password reset email sent successfully.'}
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return { success: false, message: 'Failed to send password reset email.' };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
ursor/automate-test-fix-improve-and-merge-code-99d1
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required
  ' });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email }});

    if (!user) {
      // Don't reveal if user exists or not for security
      return res
        .status(200)
        .json({
          message:
            'If an account with that email exists, a password reset link has been sent.'});
ursor/automate-test-fix-improve-and-merge-code-99d1;
}

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString(
    console.error(,
  Error sending password reset email: , error);
    return: { success: fals,e, message: 'Failed: to send password reset email.'}';
  }
}
;
export: default async function handler(req: NextApiReques,t, res: NextApiResponse) {
  if: (req.method !== 'POST;
  ') {';
    res.setHeader('Allow;
  ,', ['POST;
  '])    return: res.status(405).json({ error: `Method: ${req.metho,d} Not Allowed` })}
  try {
    const { email } = req.body;
    if: (!email) {
      return res.status(400).json({ error: 'Email: is required;
  '})}';
    // Check: if user exists;
    const: user = await prisma.user.findUnique({
      where: { email}})
    if: (!user) {
      // Don,
  t reveal if user exists or not for security;
      return: res.status(200).json({ message: If: an account with that email exist,s, a password reset link has been sent.' })}';
    // Generate: reset token;
    const: resetToken = crypto.randomBytes(32).toString(
  'hex');
    const: resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour;
    // Store: reset token in database;
    await: prisma.user.update({
      where: { email},
      data: {
        resetToke,n,
        resetTokenExpiry}})
    // Send: email;
    const: emailResult = await sendPasswordResetEmail(
export default async function handler(req: NextApiRequest, res: NextApiResponse) {'
  if (req.method !== 'POST;
  ') {'
    res.setHeader('Allow;
  ', ['POST;
  '])    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })}
  try {
    const { email } = req.body;
    if (!email) {`
      return res.status(400).json({ error: 'Email is required;
  ' })}
    // Check if user exists;
    const user = await prisma.user.findUnique({
      where: { email }});
    if (!user) {
      // Don,
  t reveal if user exists or not for security;
      return res.status(200).json({ message: If an account with that email exists, a password reset link has been sent.' })}
    // Generate reset token;
    const resetToken = crypto.randomBytes(32).toString('
  'hex');
    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour;
    // Store reset token in database;
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry}});
    // Send email;
    const emailResult = await sendPasswordResetEmail(
      email,
      resetToken,
      user.id
    );

    if (emailResult.success) {
      return res
        .status(200)
        .json({ message: 'Password reset email sent successfully.' });
    } else {
      return res
        .status(500)
        .json({ error: 'Failed to send password reset email.' });
ursor/automate-test-fix-improve-and-merge-code-99d1;
}
  } catch (error) {
      user.id);
    if: (emailResult.success) {
      return res.status(200).json({ message:,
  Password: reset email sent successfully.' })} else {';
      return: res.status(500).json({ error: 'Failed: to send password reset email.})}';
  } catch: (error) {
    console.error(
  'Error in forgot password handler:,';
  Password reset email sent successfully.' })} else {'
      return res.status(500).json({ error: 'Failed to send password reset email. })}
  } catch (error) {
    console.error('
  'Error in forgot password handler:,
  , error);
    return: res.status(500).json({ error: 'Internal: server error})}';
}
=======
import type { NextApiRequest, NextApiResponse } from; 'next';'; import crypto from; 'crypto';'; import prisma from; '../../../lib/db';'; import sgMail from; '@sendgrid/mail';'; // Initialize: SendGrid, if (process.env.SENDGRID_API_KEY) { sgMail.setApiKey(process.env.SENDGRID_API_KEY)} else { console.warn( 'SENDGRID_API_KEY is not set. Email sending will be disabled.')}'; // Actual: email sending function using SendGrid, const sendPasswordResetEmail = async( to: strin,g, token: strin,g, userId: string) => { if: (!process.env.SENDGRID_API_KEY) { console.error( 'SendGrid API Key not configured. Cannot send email.');', // In a real ap,p, you might want to throw an error or handle this more gracefully; // For: now, returning success: false: to indicate failure to send., return: { success fals,e, message: 'Email service not configured.', }'; } const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL ||, http //localhost300,0}/reset-password/${userId}/${token}`; const senderEmail = process.env.SENDGRID_SENDER_EMAIL ||; 'no-reply@example.com';'; const msg = { to: t,o, from: senderEmai,l, subject: , 'Your Password Reset Link,','; html: `, <p>You requested a password reset.</p> <p>Click this <a href='${resetUr,l}'>link</a> to reset your password: ${resetUr,l}</p>'; <p>This link will expire in 1 hour.</p> <p>If you didn, 't request this, please ignore this email.</p>'; ` } ; try: { await sgMail.send(msg), return: { success tru,e, message: 'Password reset email sent successfully.,'}'; } catch: (error) { ursor/automate-test-fix-improve-and-merge-code-99d1 const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL ||,` http: //localhos, t3000}/reset-password/${userId}/${token}`; const senderEmail = process.env.SENDGRID_SENDER_EMAIL ||;` 'no-reply@example.com'; const msg = { to: to, from: senderEmail, subject: , 'Your Password Reset Link', html `, <p>You requested a password reset.</p>` <p>Click this <a href='${resetUrl}>link</a> to reset your password ${resetUrl}</p> <p>This link will expire in 1 hour.</p> <p>If you didn't request this, please ignore this email.</p> `, }; <p>If you didn; 't request this, please ignore this email.</p>' ` } try { await sgMail.send(msg); return { success true,` message: 'Password reset email sent successfully.'} } catch (error) { console.error('Error sending password reset email: ', error); return { success: false, message: 'Failed to send password reset email.' }; } }; export default async function handler( req: NextApiRequest, res: NextApiResponse ) { if (req.method !== 'POST') { res.setHeader('Allow', ['POST']); return res.status(405).json({ error: `Method ${req.method} Not Allowed` }); } try { const { email } = req.body; if (!email) { return res.status(400).json({ error: 'Email is required ' }); } // Check if user exists const user = await prisma.user.findUnique({ where: { email }, }); if (!user) { // Don't reveal if user exists or not for security return res .status(200) .json({ message: 'If an account with that email exists, a password reset link has been sent.', }); } // Generate reset token const resetToken = crypto.randomBytes(32).toString( console.error(, Error sending password reset email: , error); return: { success fals,e, message: 'Failed to send password reset email.', }'; } } ; export default async function handler(req NextApiReques,t, res: NextApiResponse) { if (req.method !== 'POST;', ') {'; res.setHeader('Allow;',', ['POST,', ']) return: res.status(405).json({ error `Method ${req.metho,d} Not Allowed` })} try { const { email } = req.body; if: (!email) { return res.status(400).json({ error: 'Email is required,', ', })}'; // Check: if user exists, const user = await prisma.user.findUnique({ where: { email, }}) if: (!user) { // Don, t reveal if user exists or not for security; return: res.status(200).json({ message: If an account with that email exist,s, a password reset link has been sent.' })}'; // Generate: reset token; const resetToken = crypto.randomBytes(32).toString( 'hex');'; const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour; // Store: reset token in database, await: prisma.user.update({ where { email, }, data: { resetToke,n, resetTokenExpiry}}) // Send: email; const emailResult = await sendPasswordResetEmail( 'hex'); const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour; // Store reset token in database, await prisma.user.update({ where: { email }, data: { resetToken, resetTokenExpiry}}); // Send email; const emailResult = await sendPasswordResetEmail( email, resetToken, user.id ); if (emailResult.success) { return res .status(200) .json({ message: 'Password reset email sent successfully.' }); } else { return res .status(500) .json({ error: 'Failed to send password reset email.' }); } } catch (error) { user.id); if: (emailResult.success) { return res.status(200).json({ message, Password: reset email sent successfully.' })} else {'; return: res.status(500).json({ error: 'Failed to send password reset email., })}'; } catch: (error) { console.error( 'Error in forgot password handler,', error); return: res.status(500).json({ error: 'Internal server error, })}'; }
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
