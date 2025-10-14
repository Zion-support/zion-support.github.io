import React from 'react''
import { Helmet } from 'react-helmet-async''
import About from '../components/About'
export default function Page() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company specializing in AI and IT solutions. Expert team, proven track record, and cutting-edge technology." />"
        <meta name="keywords" content="about us, technology company, AI solutions, IT services, team, expertise" />
      </Helmet>
      <About />
    </>
  )
}'"