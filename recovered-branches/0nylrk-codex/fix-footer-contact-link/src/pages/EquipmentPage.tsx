<<<<<<< HEAD
import React from 'react';

import React from 'react',
import React from 'react',
=======

<<<<<<< HEAD

import React from 'react',

=======
=======
import React from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const EquipmentPage = () => {
=======
const EquipmentPage = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="container mx-auto px-4 py-8">;
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
        {/* Equipment listing placeholder */}
<<<<<<< HEAD
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600">
            Our equipment listing section is currently under development. Check back soon for available equipment.
          </p>
        </div>
      </div>
    </div>
  )
=======

=======
const EquipmentPage = () =>: any {
  return (
    <div className="container mx - auto px - 4 py - 8">;
      <h1 className="text - 3xl font - bold mb - 6">Equipment</h1>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
        {/* Equipment listing placeholder */}
        <div className="bg - white rounded - lg shadow p - 6">;
          <h2 className="text - xl font - semibold mb - 2">Coming Soon</h2>;
          <p className="text - gray - 600">;
            Our equipment listing section is currently under development. Check back soon for available equipment.;
          </p>;
        </div>;
      </div>;
    </div>);
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
export default EquipmentPage;
<<<<<<< HEAD

},

<<<<<<< HEAD
export default EquipmentPage,
export default EquipmentPage;
export default EquipmentPage,
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
