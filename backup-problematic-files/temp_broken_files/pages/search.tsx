import React, { useState, useEffect } from 'react'
import Head from 'next/
import SmartHeader from '../components/
import SmartFooter from '../components/
      price: any
      features:['Quantum-resistant encryptionAI threat detection', 'Zero-trust architecture24/
      link: any
      price:'$2,499/
      link: any
      price:'$1,299/
      link: any
      price:'$1,999/
      technology: any
      price:'$3,999/
      link: any
    { id:'under-500', name: any
    { id:'500-1000', name:'$500 - $1,000/
    { id:'1000-2500', name:'$1,000 - $2,500/
    { id:'over-2500', name:'Over $2,500/
    { id:'AI/ML', name: any
          const price = parseInt(service.price.replace(/[^0-9]/
            return parseInt(a.price.replace(/[^0-9]/g, '') - parseInt(b.price.replace(/[^0-9]/
            return parseInt(b.price.replace(/[^0-9]/g, '') - parseInt(a.price.replace(/[^0-9]/