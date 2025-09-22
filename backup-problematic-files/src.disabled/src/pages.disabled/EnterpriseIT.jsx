import _React from 'react'; const EnterpriseIT = () => { return ( <div> <h1>EnterpriseIT</h1> <p>Component placeholder</p> </div> )}; export default EnterpriseIT;
const EnterpriseIT = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>EnterpriseIT</h1>
      <p>This component is under development.</p>
    </div>
  )
};

