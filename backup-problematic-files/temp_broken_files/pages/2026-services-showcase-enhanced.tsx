import React, { useState, useMemo } from 'react'
import Head from 'next/
import Link from 'next/
import Button from '../components/ui/
import Card from '../components/ui/
import UltraFuturisticBackground from '../components/ui/
import UltraFuturisticCard from '../components/ui/
import { innovative2026MicroSaasServicesV2 } from '../data/
import { emergingTech2026ServicesV2 } from '../data/
import { enterpriseIT2026ServicesV2 } from '../data/
import { innovative2026AIServicesV3 } from '../data/
import { emergingTech2026ServicesV3 } from '../data/
import { enterpriseIT2026ServicesV3 } from '../data/
    website: any
    { id:'low', name: any
    { id:'medium', name: any
    { id:'high', name: any
    { id:'premium', name: any
        const price = parseInt(service.price.replace(/[^0-9]/
          return parseInt(a.price.replace(/[^0-9]/g, '') - parseInt(b.price.replace(/[^0-9]/
          return parseInt(b.price.replace(/[^0-9]/g, '') - parseInt(a.price.replace(/[^0-9]/