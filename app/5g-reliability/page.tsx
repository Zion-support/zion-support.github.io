import React from 'react';

const page = React.lazy(() => Promise.resolve({ default: () => <div>5G Reliability Page</div> }));
export default page;

