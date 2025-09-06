import React from 'react'
import Head from 'next/
import UltraFuturisticBackground from '../../components/ui/
import Button from '../../components/ui/
import Card from '../../components/ui/
import { enhancedRealMicroSaasServices } from '../../data/
import { extraServices } from '../../data/
import { additionalEnhancedServices } from '../../data/
import { newRealServices } from '../../data/
import { marketReadyServices } from '../../data/
	website: any
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/
		const path = url.pathname.replace(/^\/+|\/+$/
		if (path.startsWith('services/
			return path.substring('services/
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" />