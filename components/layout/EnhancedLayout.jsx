<<<<<<< HEAD
<EnhancedNavigation /> <main className="flex-1" > {
  children 
}</main> <EnhancedFooter /> </div>) 
}
export default EnhancedLayout
=======
import React from 'react';
import PropTypes from 'prop-types';
import EnhancedFooter from './EnhancedFooter';

const EnhancedLayout = ({ children }) => {
  return (

        {children}
      </main>
      <EnhancedFooter />
    </div>

  );
}
export default EnhancedLayout;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
