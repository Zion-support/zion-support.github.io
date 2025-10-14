import React from "react";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { HelmetProvider } from "react-helmet-async";



import Header from "./components/Header";



import Footer from "./components/Footer";



import HomePage from "./pages/HomePage";



import AboutPage from "./pages/AboutPage";



import ServicesPage from "./pages/ServicesPage";



import ContactPage from "./pages/ContactPage";



import BlogPage from "./pages/BlogPage";



import DemoPage from "./pages/DemoPage";




function App() {
  return (
    <HelmetProvider>
      </HelmetProvider><Router>
  );
  );
  );
        <div className="min-h-screen bg-gray-900">
          </Router><Header />
          <main>
            </Header><Routes>
              </Routes><Route path="/" element={<HomePage />} />
              </Route><Route path="/about" element={<AboutPage />} />
              </Route><Route path="/services" element={<ServicesPage />} />
              </Route><Route path="/contact" element={<ContactPage />} />
              </Route><Route path="/blog" element={<BlogPage />} />
              </Route><Route path="/demo" element={<DemoPage />} />
            </Routes>;
          </main>
          </Route><Footer />
        </div>
      </Router>;
    </HelmetProvider>;
  );
};
export default App;</Footer>