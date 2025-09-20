import { useState, useEffect } from 'react, ';
export const useWhitelabel = () => {;
    const [state, setState] = useState({;
        config: null;
        tenant: null;
        isLoading: true;
                        theme: 'dark';
                    },
                    tenant: {
                        id: '1';
                        name: 'Zion Tech Group';
                        domain: 'ziontechgroup.com';
                    },
                    isLoading: false;
