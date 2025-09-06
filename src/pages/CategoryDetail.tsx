import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect, useRef, Suspense } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { ProductListing } from "@/types/listings",
import { useRouter } from 'next/router',
import Link from 'next/link',
import { toast } from "@/hooks/use-toast",
import { NextSeo } from '@/components/NextSeo',
import { Header } from "@/components/Header",
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton',
import {logErrorToProduction} from '@/utils/productionLogger',


    },


    'developer-tools': {

    },
;


;
