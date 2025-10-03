import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Contact Us
        </h1>
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">Get in Touch</h3>
            <form className="text-left">
              <div>
                <label className="text-left">
                  Name
                </label>
                <input
                  type="text"
                  className="text-left"
                />
              </div>
              <div>
                <label className="text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="text-left"
                />
              </div>
              <div>
                <label className="text-left">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="text-left"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-left"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="text-left">
            <h3 className="text-left">Contact Information</h3>
            <div className="text-left">
              <div>
                <h4 className="text-left">Email</h4>
                <p className="text-left">info@ziontech.com</p>
              </div>
              <div>
                <h4 className="text-left">Phone</h4>
                <p className="text-left">(555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-left">Address</h4>
                <p className="text-left">
                  123 Tech Street<br />
                  Innovation City, IC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;