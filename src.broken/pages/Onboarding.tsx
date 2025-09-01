import React from 'react';
export function ChatWidget() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Zion
            </h1>
            <p className="text-zion-slate-light text-xl">
              Complete your profile to get started
            </p>
          </div>

          <div className="mb-12">
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  status={
                    currentStep > index
                      ? "complete"
                      : currentStep === index
                      ? "current"
                      : "incomplete"
                  }
                  label={step.label}
                  description={step.description}
                />
              ))}
            </Steps>
          </div>

          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {currentStep === 0 ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />
            ) : (
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />
            )}

            {currentStep === 1 && (
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
                >
                  Back to Role Selection
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
