'use client'
import React from 'react'
import  Helmet  } from 'react-helmet-async'

interface SEOHeadProps title string description string keywords string const SEOHeadWrapper ReactFC<SEOHeadProps> =  title description keywords  => 
  return (<Helmet> </Helmet><title>title</title>
        <meta name="description" content=description /> </meta><meta name="keywords" content=keywordsjoin' ' /> </meta></Helmet>
  
