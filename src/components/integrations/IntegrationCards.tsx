import React from "react";

export function IntegrationCard({
title;
description;
icon;
status;
onConnect}: IntegrationCardProps) {
return (
)
export function IntegrationCards() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      <IntegrationCard,
title='Slack'
        description='Send notifications and interact with Zion from Slack.'
        icon={<Slack className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Slack clicked')}
      />
      <IntegrationCard,
title='Salesforce'
        description='Sync leads and opportunities with Salesforce.'
        icon={<Briefcase className='h-5 w-5' />}
        onConnect={() => logDebug('Connect Salesforce clicked')}      />
      <IntegrationCard,
title="Salesforce"
        description="Sync leads and opportunities with Salesforce."
        icon = {<Briefcase className="h-5 w-5" />}
        onConnect = {() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard,
title='Microsoft Teams'
        description='Receive updates through Microsoft Teams.'
        icon={<Users className='h-5 w-5' />}        onConnect={() => logDebug('Connect Teams clicked')}
      />
    </div>
  )
}        icon={<Briefcase className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Salesforce clicked')}
      />
      <IntegrationCard,
title="Microsoft Teams"
        description="Receive updates through Microsoft Teams."
        icon={<Users className="h-5 w-5" />}
        onConnect={() => logDebug('Connect Teams clicked')}
        icon = {<Users className="h-5 w-5" />}
        onConnect = {() => logDebug('Connect Teams clicked')}
      />
    </div>
