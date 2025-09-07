
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

import { useLocation } from "react-router-dom";


/**
 * Custom hook to track page views for analytics purposes;
 * Attaches event listeners to track route changes and logs page views;
 */


  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view

      console && console.log('Page view:', window && window.location.pathname)

      console.log("Page view:", window.location.pathname);

    };


  const location = useLocation(),;
  useEffect(() => {;
    const handleRouteChange = () => {;
      // Track page view;
      // // // console.log('Page view:', window.location.pathname);
    },;
    // Listen for route changes;
    window.addEventListener('popstate', handleRouteChange),;
    // Initial page load;

;
