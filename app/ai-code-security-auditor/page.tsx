import React from 'react';
import { Helmet } from 'react-helmet-async';



const page = React.lazy((): Promise<{ default: React.ComponentType<any> }> => import('./page'));
export default page;
