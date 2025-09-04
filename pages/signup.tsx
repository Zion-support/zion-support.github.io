import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Signup() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };
  const [formData, setFormData] = useState({
    firstName: '';
    lastName: '';
    email: '';
    company: '';
    phone: '';
    password: '';
    confirmPassword: '';
    agreeToTerms: fal,s,e,;
    subscribeNewsletter: fals,e, });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { na,m,e, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,;
      [name]: type === 'checkbox' ? checked : value;
    }));
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      retur,n;, }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    // Handle signup logic here;
    console.log('Signup attempt: ' formData);
    alert('Account creation functionality will be implemented with authentication syste,m.');, }
  return (;
    <>;
      <Head>;
        <title>Sign Up - Zion Tech Group | Create Your Account</title>;
        <meta name="description" content="Create your Zion Tech Group account to access our technology services, manage projects, and get started with our solutions." />";
        <meta name="keywords" content="sign up, create account, register, new user, account creation" />";
        <link rel="canonical" href={`${contact.site}/signup`} />";
        <meta property="og: title" content="Sign Up - Zion Tech Group | Create Your Account" />";
        <meta property="og:description" content="Create your Zion Tech Group account to access our technology servic,e,s, manage projects, and get started with our solutions." />";
        <meta property="og: url" content={`${contact.si,t,e}/signup`} />";
        <meta property="og: type" content="website" />;
      </Head>;

      <div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)' color: 'white' padding: '40px 20p,x', }}>;
        <div style={{ maxWidth: 50,0, margin: '0 aut,o', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 40, }}>;
            <h1 style={{ 
              fontSize: '2.5rem' 
              fontWeigh,t: 80,0, 
              marginBottom: 1,0,;
              background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', },,}>;
              Create Account;
            </h1>;
            <p style={{ color: '#94a3,b8,', fontSize: '1.1re,m', }}>;
              Join Zion Tech Group and unlock the power of technology;
            </p>;
          </div>;

          <div style={{
            background: 'rgb,a(25,5, 255, 255, 0.05)';
            borderRadius: 1,2,;
            padding: 4,0,;
            border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
          }}>;
            <form onSubmit={handleSubmit}>;
              <div style={{ display: 'grid' gridTemplateColumns: '1fr 1fr' ga,p: 1,5, marginBottom: 20, }}>;
                <div>;
                  <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                    First Name *;
                  </label>;
                  <input";
                    type="text"";
                    name="firstName";
                    value={formData.firstName}
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
                    placeholder="First name";
                  />;
                </div>;
                <div>;
                  <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                    Last Name *;
                  </label>;
                  <input";
                    type="text"";
                    name="lastName";
                    value={formData.lastName}
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
                    placeholder="Last name";
                  />;
                </div>;
              </div>;

              <div style={{ marginBottom: 20, }}>;
                <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                  Email Address *;
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
                  Company Name;
                </label>;
                <input";
                  type="text"";
                  name="company";
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%';
                    padding: '12px';
                    borderRadiu,s:,8,;
                    border: '1px solid rgb,a(25,5, 255, 255, 0.2)';
                    background: 'rgb,a(25,5, 255, 255, 0.1)';
                    color: 'white';
                    fontSize: '1re,m', }";
                  placeholder="Your company name";
                />;
              </div>;

              <div style={{ marginBottom: 20, }}>;
                <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                  Phone Number;
                </label>;
                <input";
                  type="tel"";
                  name="phone";
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%';
                    padding: '12px';
                    borderRadiu,s:,8,;
                    border: '1px solid rgb,a(25,5, 255, 255, 0.2)';
                    background: 'rgb,a(25,5, 255, 255, 0.1)';
                    color: 'white';
                    fontSize: '1re,m', }";
                  placeholder="+1 (555) 123-4567";
                />;
              </div>;

              <div style={{ display: 'grid' gridTemplateColumns: '1fr 1fr' ga,p: 1,5, marginBottom: 20, }}>;
                <div>;
                  <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                    Password *;
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
                    placeholder="Create password";
                  />;
                </div>;
                <div>;
                  <label style={{ display: 'block' marginBotto,m:,8, fontWeight: 600, }}>;
                    Confirm Password *;
                  </label>;
                  <input";
                    type="password"";
                    name="confirmPassword";
                    value={formData.confirmPassword}
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
                    placeholder="Confirm password";
                  />;
                </div>;
              </div>;

              <div style={{ marginBottom: 20, }}>;
                <label style={{ display: 'flex' alignItems: 'flex-start' ga,p: 1,0, cursor: 'pointe,r', }}>;
                  <input";
                    type="checkbox"";
                    name="agreeToTerms";
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required;
                    style={{ width: 1,6, height: 1,6, marginTop: 2, }
                  />;
                  <span style={{ fontSize: '0.9rem' lineHeigh,t: 1.4, }}>;
                    I agree to the{' '}";
                    <Link href="/terms" style={{ color: '#3b82f6' textDecoration: 'non,e', }}>;
                      Terms of Service;
                    </Link>;
                    {' '}and{' '}";
                    <Link href="/privacy" style={{ color: '#3b82f6' textDecoration: 'non,e', }}>;
                      Privacy Policy;
                    </Link>;
                    {' '}*;
                  </span>;
                </label>;
              </div>;

              <div style={{ marginBottom: 30, }}>;
                <label style={{ display: 'flex' alignItems: 'center' ga,p: 1,0, cursor: 'pointe,r', }}>;
                  <input";
                    type="checkbox"";
                    name="subscribeNewsletter";
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    style={{ width: 1,6, height: 16, }
                  />;
                  <span style={{ fontSize: '0.9re,m', }}>;
                    Subscribe to our newsletter for updates and insights;
                  </span>;
                </label>;
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
                Create Account;
              </button>;
            </form>;

            <div style={{ textAlign: 'center' marginTo,p: 20, }}>;
              <p style={{ color: '#94a3,b8,', fontSize: '0.9re,m', }}>;
                Already have an account?{' '}";
                <Link href="/login" style={{ 
                  color: '#3b82f6' 
                  textDecoration: 'none' 
                  fontWeigh,t: 600, }}>;
                  Sign in here;
                </Link>;
              </p>;
            </div>;
          </div>;

          <div style={{ textAlign: 'center' marginTo,p: 30, }}>;
            <p style={{ color: '#64748b' fontSize: '0.9rem' marginBotto,m: 10, }}>;
              Questions about creating an account?;
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
}}}}}}}}}}}}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>"