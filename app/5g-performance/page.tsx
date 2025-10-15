import React from 'react';

const page = React.lazy(() => Promise.resolve({ default: () => <div>5G Performance Page</div> }));
export default page;

