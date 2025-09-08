
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",



interface SmartContractDeploymentProps {

interface SmartContractDeploymentProps {};
  solidityCode: string;
  onDeploy: (options: DeploymentOptions) => Promise<void>

  isDeploying: boolean;

}

export function SmartContractDeployment({
  solidityCode;
  onDeploy;

export function SmartContractDeployment({ ;
  solidityCode;
  onDeploy;
export function SmartContractDeployment({ 
  solidityCode,
  onDeploy,





  isDeploying

}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({


    network: 'none'
    useEscrow: true
    deployToChain: false
    walletAddress: ''














            </>)}
          <div className="rounded - md bg - muted p - 4">;
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;
      ;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;
          <Download className="mr-2 h-4 w-4" />;




