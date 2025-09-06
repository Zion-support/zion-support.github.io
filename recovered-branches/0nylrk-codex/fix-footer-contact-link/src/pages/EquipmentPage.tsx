

import React from 'react',

<<<<<<< HEAD
=======
=======
import React from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const EquipmentPage = () => {
=======
=======
import React from 'react',

const EquipmentPage = () => {
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const EquipmentPage = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
=======
import React from 'react',;
;
const EquipmentPage = () => {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="container mx-auto px-4 py-8">;
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
        {/* Equipment listing placeholder */}
<<<<<<< HEAD
=======
import React from 'react';

import React from 'react',
import React from 'react',
const EquipmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equipment listing placeholder */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600">
            Our equipment listing section is currently under development. Check back soon for available equipment.
          </p>
        </div>
      </div>
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        <div className="bg-white rounded-lg shadow p-6">;
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>;
          <p className="text-gray-600">;
            Our equipment listing section is currently under development. Check back soon for available equipment.;
          </p>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
};


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}
;
export default EquipmentPage;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

},


  ),;
},;
;export default EquipmentPage,
 {
  /* Equipment listing placeholder */ 
}<div className="bg-white rounded-lg shadow p-6" > <h2 className="text-xl font-semibold mb-2" >Coming Soon</h2> <p className="text-gray-600" > Our equipment listing section is currently under development. Check back soon for available equipment. </p> </div> </div> </div>) 
};
export default EquipmentPage;
}
export default EquipmentPage;

},

export default EquipmentPage,
export default EquipmentPage;
export default EquipmentPage,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
