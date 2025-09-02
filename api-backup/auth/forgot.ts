import type { NextApiRequest, NextApiResponse } from
  'next';
import crypto from
  'crypto';
import prisma from
  '../../../lib/db';
import sgMail from
  '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn(
  'SENDGRID_API_KEY is not set. Email sending will be disabled.');
}

// Actual email sending function using SendGrid
const sendPasswordResetEmail = async (
  to: string,
  token: string,
  userId: string
) => {
  if (!process.env.SENDGRID_API_KEY) {
    console.error(
  'SendGrid API Key not configured. Cannot send email.');
    // In a real app, you might want to throw an error or handle this more gracefully
    // For now, returning success: false to indicate failure to send.
    return { success: false, message: 'Email service not configured.' };
  }

ursor/automate-test-fix-improve-and-merge-code-99d1
  const msg = {
    to: to,
    from: senderEmail,
    subject:
  'Your Password Reset Link',
    html: `
      <p>You requested a password reset.</p>
      <p>Click this <a href="${resetUrl}">link</a> to reset your password: ${resetUrl}</p>
      <p>This link will expire in 1 hour.</p>
ursor/automate-test-fix-improve-and-merge-code-99d1
  };
  try {
    await sgMail.send(msg);
    return {
      success: true,
      message: 'Password reset email sent successfully.',
    };
  } catch (error) {
ursor/automate-test-fix-improve-and-merge-code-99d1
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required
  ' });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
ursor/automate-test-fix-improve-and-merge-code-99d1
    }
    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString(
  'hex');
    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Store reset token in database
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    // Send email
    const emailResult = await sendPasswordResetEmail(
      email,
      resetToken,
      user.id
    );

    if (emailResult.success) {
ursor/automate-test-fix-improve-and-merge-code-99d1
    }  } catch (error) {
    console.error(
  'Error in forgot password handler:,
  , error);
    return res.status(500).json({ error: 'Internal server error });
  }
}
