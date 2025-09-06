<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD

<<<<<<< HEAD
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

=======
=======
import React from 'react',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
import React from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const EquipmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">;
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
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
}
export default EquipmentPage;

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

},

<<<<<<< HEAD
export default EquipmentPage,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export default EquipmentPage;
=======
export default EquipmentPage,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
