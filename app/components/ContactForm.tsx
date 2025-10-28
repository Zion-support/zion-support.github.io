'use client';

import React, { memo } from 'react';

const ContactForm: React.FC = memo(() => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;