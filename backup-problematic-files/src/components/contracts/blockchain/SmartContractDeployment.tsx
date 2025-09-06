
import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
import { RadioGroup, RadioGroupItem } from "@/components/ui/
import { Label } from "@/components/ui/
import { Input } from "@/components/ui/
import { Switch } from "@/components/ui/
import { BlockchainNetwork, DeploymentOptions } from "@/types/
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div><div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > 