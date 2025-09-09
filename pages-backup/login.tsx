import Head from "next/head";
import React, { useState } from "react";
const Head = dynamic(() => import("next/head"), { ssr: false })}
  Zap,;
  Star} from "lucide-react";
export default function Login() {

  const [formData, setFormData] = useState({";
    email: ",";
    password: ""})}
  const [showPassword, setShowPassword] = useState(false)}
  const [isLoading, setIsLoading] = useState()}
  const [error, setError] = useState("")}
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {,;
    const { name, value } = e.target;
    setFormData(prev = > ({;
      ...prev,;
      [name]: value}))}
  const handleSubmit = async (e: React.FormEvent) => {,;
    e.preventDefault(),;
    setIsLoading(true),";
    setError(""),;
    // comment;
await new Promise(resolve => setTimeout(resolve, 2000))}
    // comment;
window.location.href = "/dashboard}

  const benefits = [];

  return (;
    <>;
<Head>;
        <title>Sign In - Zion Tech Group</title>;
        <meta name = "description" content="Sign in to your Zion Tech Group account to access your dashboard and services."  />;
      </Head>;
";
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">;
        {/* comment */}";
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,;
            <motion.div,";
initial="{{" opacity: 0, y: 20 }}";
              animate="{{" opacity: 1, y: 0 }}";
              className="text-center">";
              <h1 className="text-4xl md: text-5xl font-bold mb-6">;
                Welcome Back,;
              </h1>";
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">,;
                Sign in to your account to access your dashboard, projects, and exclusive resources.;
              </p>;
            </motion.div>;
          </div>;
        {/* comment */}";
        <div className="py-16 bg-white">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Why Sign In?;
              </h2>";
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                Access your personalized workspace and exclusive features,;
              </p>;
            </div>;
";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,;
              {benefits.map((benefit, index) => (;
                <motion.div,";
key="{index}
                  initial="{{" opacity: 0, y: 20 }}";
                  animate="{{" opacity: 1, y: 0 }}";
                  transition="{{" delay: index * 0.1 }}";
                  className="text-center">";
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <benefit.icon className="w-8 h-8 text-blue-600" />;
                  </div>";
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">;
                    {benefit.title}

                  </h3>";
                  <p className="text-gray-600">;
                    {benefit.description}

                  </p>;
                </motion.div>;
              ))}

            </div>;
        {/* comment */}";
        <div className="py-16">";
          <div className="max-w-md mx-auto px-4 sm: px-6 lg:px-8">,;
            <motion.div,";
initial="{{" opacity: 0, y: 20 }}";
              animate="{{" opacity: 1, y: 0 }}";
              className="bg-white rounded-2xl shadow-2xl p-8">";
              <div className="text-center mb-8">";
                <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                  Sign In,;
                </h2>";
                <p className="text-gray-600">;
                  Enter your credentials to access your account,;
                </p>;
              </div>;
              {error && (";
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">";
                  <p className="text-red-600 text-sm">{error}</p>;
                </div>;
              )}

";
              <form onSubmit="{handleSubmit}" className="space-y-6">;
                <div>";
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
                    Email Address,;
                  </label>";
                  <div className="relative">";
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />";
                    <input type="email;
                      id="email;
                      name="email";
                      required,";
value="{formData.email}
                      onChange="{handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent;
                      placeholder="your@email.com"  />;
                  </div>;
                <div>";
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">;
                    Password,;
                  </label>";
                  <div className="relative">";
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />",;
                    <input type="{showPassword" ? "text" : "password"}";
                      id="password;
                      name="password";
                      required,";
value="{formData.password}
                      onChange="{handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent;
                      placeholder="Enter your password"  />";
                    <button type="button"">;
                      onClick="{()" => setShowPassword(!showPassword)}";
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: text-gray-600">",;
                      {showPassword ? <EyeOff className="w-5 h-5"  /> : <Eye className="w-5 h-5"  />}

                    </button>;
                  </div>;
";
                <div className="flex items-center justify-between">";
                  <div className="flex items-center">";
                    <input type="checkbox;
                      id="remember;
                      className="h-4 w-4 text-blue-600 focus: ring-blue-500 border-gray-300 rounded"  />";
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">;
                      Remember me,;
                    </label>;
                  </div>";
                  <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">;
                    Forgot password?;
                  </a>;
                </div>;
                <div>";
                  <button type="submit"">;
                    disabled="{isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">;
                    {isLoading ? (;
                      <>";
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>;
                        Signing in...;
                      </>;
                    ) : (;
                      <>;
                        Sign In";
                        <ArrowRight className="ml-2 w-5 h-5"  />;
                      </>;
                    )}

                  </button>;
                </div>;
              </form>;
";
              <div className="mt-8 text-center">";
                <p className="text-gray-600">";
                  Don"t have an account?{" "}";
                  <a href="/register" className="text-blue-600 hover: text-blue-500 font-medium">;
                    Create one here,;
                  </a>;
                </p>;
              </div>;
            </motion.div>;
          </div>;
    </>",;
  )}