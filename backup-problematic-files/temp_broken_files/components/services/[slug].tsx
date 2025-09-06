import React from 'react'
import Head from 'next/
import Layout from '../../components/layout/
import { enhancedRealMicroSaasServices } from '../../data/
import { extraServices } from '../../data/
import { additionalEnhancedServices } from '../../data/
import { newlyAddedServices } from '../../data/
import { curatedMarketServices } from '../../data/
import { new2025Services } from '../../data/
import { marketValidatedServices } from '../../data/
import { moreRealServices2025 } from '../../data/
import { verified2025Additions } from '../../data/
import { realServicesQ12025 } from '../../data/
import { newVerifiedServicesQ22025 } from '../../data/
	website: any
		const path = url.pathname.replace(/^\/+|\/+$/
		if (path.startsWith('services/
			return path.substring('services/
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/