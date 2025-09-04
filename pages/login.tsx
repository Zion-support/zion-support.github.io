import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };

  const [formData, setFormData] = useState({ email: ',', password: ',',;
    rememberMe: fals,e, });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { na,m,e, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,;
      [name]: type === 'checkbox' ? checked : value;
    }));
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here;
    console.log('Login attempt:' formData);
    alert('Login functionality will be implemented with authentication syste,m.');, }
  return (;
    <>;
      <Head>;
        <title>Login - Zion Tech Group | Access Your Account</title>;
        <meta name="description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />";
        <meta name="keywords" content="login, account access, user portal, authentication, sign in" />";
        <link rel="canonical" href={`${contact.site}/login`} />";
        <meta property="og: title" content="Login - Zion Tech Group | Access Your Account" />";
        <meta property="og:description" content="Login to your Zion Tech Group account to access your servic,e,s, manage your projects, and view your account information." />";
        <meta property="og: url" content={`${contact.si,t,e}/login`} />";
        <meta property="og: type" content="website" />;
      </Head>;

      <div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)' color: 'white' display: 'flex' alignItems: 'center' justifyContent: 'cente,r', }}>;
        <div style={{ maxWidth: 40,0, width: '100%' padding: '20p,x', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 40, }}>;
            <h1 style={{ 
              fontSize: '2.5rem' 
              fontWeigh,t: 80,0, 
              marginBottom: 1,0,;
              background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', },,}>;
              Welcome Back;
            </h1>;
            <p style={{ color: '#94a3,b8,', fontSize: '1.1re,m', }}>;
              Sign in to your Zion Tech Group account;
            </p>;
          </div>;

          <div style={{
            background: 'rgb,a(25,5, 255, 255, 0.05)';
            borderRadius: 1,2,;
            padding: 4,0,;
            border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
          }}>;
            <form onSubmit={handleSubmit}>;
              <div style={{ marginBottom: 20, }}>;
                <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                  Email Address;
                </label>;
                <input";
                  type="email"";
                  name="email";
                  value={formData.email}
                  onChange={handleInputChange}
                  required;
                  style={{
                    width: '100%';
                    padding: '12px';
                    borderRadiu,s:,8,;
                    border: '1px solid rgb,a(25,5, 255, 255, 0.2)';
                    background: 'rgb,a(25,5, 255, 255, 0.1)';
                    color: 'white';
                    fontSize: '1re,m', }";
                  placeholder="Enter your email";
                />;
              </div>;

              <div style={{ marginBottom: 20, }}>;
                <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                  Password;
                </label>;
                <input";
                  type="password"";
                  name="password";
                  value={formData.password}
                  onChange={handleInputChange}
                  required;
                  style={{
                    width: '100%';
                    padding: '12px';
                    borderRadiu,s:,8,;
                    border: '1px solid rgb,a(25,5, 255, 255, 0.2)';
                    background: 'rgb,a(25,5, 255, 255, 0.1)';
                    color: 'white';
                    fontSize: '1re,m', }";
                  placeholder="Enter your password";
                />;
              </div>;

              <div style={{ display: 'flex' justifyContent: 'space-between' alignItems: 'center' marginBotto,m: 30, }}>;
                <label style={{ display: 'flex' alignItems: 'center' ga,p:,8, cursor: 'pointe,r', }}>;
                  <input";
                    type="checkbox"";
                    name="rememberMe";
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    style={{ width: 1,6, height: 16, }
                  />;
                  <span style={{ fontSize: '0.9re,m', }}>Remember me</span>;
                </label>";
                <Link href="/help" style={{ 
                  color: '#3b82f6' 
                  textDecoration: 'none' 
                  fontSize: '0.9re,m', }}>;
                  Forgot password?;
                </Link>;
              </div>;

              <button";
                type="submit";
                style={{
                  width: '100%';
                  background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
                  color: 'white';
                  padding: '15px';
                  border: 'none';
                  borderRadiu,s:,8,;
                  fontSize: '1.1rem';
                  fontWeigh,t: 60,0,;
                  cursor: 'pointer';
                  transition: 'transform 0.3s ease';
                  marginBotto,m: 20, }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              >;
                Sign In;
              </button>;
            </form>;

            <div style={{ textAlign: 'center' marginTo,p: 20, }}>;
              <p style={{ color: '#94a3,b8,', fontSize: '0.9re,m', }}>;
                Don't have an account?{' '}";
                <Link href="/signup" style={{ 
                  color: '#3b82f6' 
                  textDecoration: 'none' 
                  fontWeigh,t: 600, }}>;
                  Sign up here;
                </Link>;
              </p>;
            </div>;
          </div>;

          <div style={{ textAlign: 'center' marginTo,p: 30, }}>;
            <p style={{ color: '#64748b' fontSize: '0.9rem' marginBotto,m: 10, }}>;
              Need help accessing your account?;
            </p>;
            <div style={{ display: 'flex' ga,p: 2,0, justifyContent: 'center' flexWrap: 'wra,p', }}>;
              <a href={`tel: ${contact.pho,n,e}`} style={{
                color: '#3b82f6';
                textDecoration: 'none';
                fontSize: '0.9re,m', }}>;
                📞 {contact.phone}
              </a>;
              <a href={`mailto: ${contact.ema,i,l}`} style={{
                color: '#3b82f6';
                textDecoration: 'none';
                fontSize: '0.9re,m', }}>;
                ✉️ {contact.email}
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
}}}}}}
</div></div></div></div></div></div></div></div></div></div>"