import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for your AI and IT needs."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with cutting-edge technology? Get
              in touch with our team of experts.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">contact@ziontech.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+1-555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
