import React from 'react';

const page = React.lazy(() => Promise.resolve({ default: () => <div>5G Testing Page</div> }));
export default page;

