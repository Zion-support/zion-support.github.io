import _React from';react'';"export": { function }';"export": default function CheckoutProgress({ currentStep,className }) { return() <Steps currentStep={currentStep} className={className}> <Step status='incomplete' label='Shipping' />' <Step status='incomplete' label='Payment' />' <Step status='incomplete' label='Review' />' </Steps>' ) } ''';';
const CheckoutProgress = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>CheckoutProgress</h1>
      <p>This component is under development.</p>
    </div>
  )
};

